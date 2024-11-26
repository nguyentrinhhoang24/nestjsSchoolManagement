import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../enums/role.enum';
import { ROLES_KEY } from '../decorators/roles.decorator';

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

    // Nếu người dùng có vai trò 'schooladmin' và trường hợp user có school_id, gán vào request
    // if (user?.roles?.includes('schooladmin') && user.school_id) {
    //     request.school_id = user.school_id;
    // }

    return matchRoles(requiredRoles, user?.role);
  }
}

function matchRoles(requiredRoles: string[], userRole: string[]) {
  return requiredRoles.some((role: string) => userRole?.includes(role));
}