import { prisma } from './prisma';
import { AudioTemplate, AudioHistory } from '@/lib/types/db';

class DBOperations {
  static async getAudioTemplateByName(name: string): Promise<AudioTemplate | null> {
    return await prisma.audioTemplate.findFirst({
      where: { name },
    });
  }

  static async createAudioTemplate(data: {
    name: string;
    referenceId: string;
    description?: string;
  }): Promise<AudioTemplate> {
    return await prisma.audioTemplate.create({
      data,
    });
  }

  static async getAudioTemplates(): Promise<AudioTemplate[]> {
    return await prisma.audioTemplate.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  static async getAudioTemplate(id: string): Promise<AudioTemplate | null> {
    return await prisma.audioTemplate.findUnique({
      where: { id },
    });
  }

  static async updateAudioTemplate(
    id: string,
    data: {
      name?: string;
      description?: string;
    }
  ): Promise<AudioTemplate | null> {
    return await prisma.audioTemplate.update({
      where: { id },
      data,
    });
  }

  static async deleteAudioTemplate(id: string): Promise<void> {
    await prisma.audioTemplate.delete({
      where: { id },
    });
  }

  static async createAudioHistory(data: {
    text: string;
    audioUrl: string;
    templateId?: string;
    duration: number;
  }): Promise<AudioHistory> {
    return await prisma.audioHistory.create({
      data,
    });
  }

  static async getAudioHistory(): Promise<AudioHistory[]> {
    return await prisma.audioHistory.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  static async getAudioHistoryById(id: string): Promise<AudioHistory | null> {
    return await prisma.audioHistory.findUnique({
      where: { id },
    });
  }

  static async deleteAudioHistory(id: string): Promise<void> {
    await prisma.audioHistory.delete({
      where: { id },
    });
  }

  static async getAudioHistoryByTemplateId(
    templateId: string
  ): Promise<AudioHistory[]> {
    return await prisma.audioHistory.findMany({
      where: { templateId },
      orderBy: { createdAt: 'desc' },
    });
  }
}

export { DBOperations };
