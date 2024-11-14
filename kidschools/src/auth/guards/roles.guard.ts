import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "../enums/role.enum";
import { ROLES_KEY } from "../decorators/roles.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) return true;

        const request = context.switchToHttp().getRequest();
        const user = request.user;

        // Kiểm tra nếu user là schooladmin và có school_id, thì gán vào request
        if (user?.role === 'schooladmin' && user.school_id) {
            request.school_id = user.school_id;
        }

        return matchRoles(requiredRoles, user?.roles);
    }
}

// Hàm kiểm tra nếu ít nhất một vai trò trong requiredRoles trùng với vai trò của người dùng
function matchRoles(requiredRoles: string[], userRoles: string) {
    return requiredRoles.some(role => userRoles.includes(role));
}
