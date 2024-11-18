import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Session } from 'src/session/schemas/Session.schema';
import { UpdateSessionDto } from 'src/session/dto/updateSession.dto';
import { CreateSessionDto } from 'src/session/dto/createSession.dto';

@Injectable()
export class SessionService {
  constructor(@InjectModel('Session') private sessionModel: Model<Session>) {}

  async findAll(): Promise<Session[]> {
    const sessions = await this.sessionModel.find();
    return sessions;
  }

  async create(session: CreateSessionDto): Promise<Session> {
    const newSession = await this.sessionModel.create(session);
    return newSession;
  }

  async findById(id: string): Promise<Session> {
    const session = await this.sessionModel.findById(id);
    if (!session) {
      throw new NotFoundException('Session not found.');
    }
    return session;
  }

  async updateById(id: string, Session: UpdateSessionDto): Promise<Session> {
    return await this.sessionModel.findByIdAndUpdate(id, Session, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Session> {
    return await this.sessionModel.findByIdAndDelete(id);
  }
}