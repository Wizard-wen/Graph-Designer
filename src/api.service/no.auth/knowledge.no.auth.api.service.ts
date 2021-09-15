/**
 * @author songxiwen
 * @date  2021/9/12 22:46
 */

import type {
  EntityCompletelyListItemType,
  KnowledgeResponseType
} from 'edu-graph-constant';
import { ApiPathEnum } from '@/api.service/config/api.config';
import { RequestUtil } from '@/utils';
import type { PublicApiResponseType } from '@/utils';

// eslint-disable-next-line import/prefer-default-export
export class KnowledgeNoAuthApiService {
  static async get(params: { id: string; }): Promise<PublicApiResponseType<KnowledgeResponseType>> {
    return RequestUtil.post<{ id: string; }, KnowledgeResponseType>({
      apiPath: ApiPathEnum.GetNoAuthKnowledgeById,
      requestBody: params
    });
  }

  static async getList(params: {
    knowledgeBaseTypeId?: string;
    repositoryId?: string;
    domainId?: string;
  }): Promise<PublicApiResponseType<KnowledgeResponseType[]>> {
    return RequestUtil.post<{
      knowledgeBaseTypeId?: string;
      repositoryId?: string;
      domainId?: string;
    }, KnowledgeResponseType[]>({
      apiPath: ApiPathEnum.GetNoAuthKnowledgeList,
      requestBody: params
    });
  }

  static async getRepositoryKnowledgeList(params: {
    repositoryEntityId: string;
  }): Promise<PublicApiResponseType<{
    list: EntityCompletelyListItemType[],
    view: { [key: string]: { x: number; y: number } }
  }>> {
    return RequestUtil.post<{
      repositoryEntityId: string;
    }, {
      list: EntityCompletelyListItemType[],
      view: { [key: string]: { x: number; y: number } }
    }>({
      apiPath: ApiPathEnum.GetNoAuthKnowledgeListByRepositoryEntityId,
      requestBody: params
    });
  }

  /**
   * 获取关联，返回值分为四个维度，（前置、导出）（库内、库外）
   * @param params
   */
  static async findEdgesByKnowledgeEntityId(params: {
    knowledgeEntityId: string;
    repositoryEntityId: string;
  }): Promise<PublicApiResponseType<{
    entity: EntityCompletelyListItemType,
    preInnerList: EntityCompletelyListItemType[],
    preOuterList: EntityCompletelyListItemType[],
    extendInnerList: EntityCompletelyListItemType[],
    extendOuterList: EntityCompletelyListItemType[]
  }>> {
    return RequestUtil.post<{
      knowledgeEntityId: string;
      repositoryEntityId: string;
    }, {
      entity: EntityCompletelyListItemType,
      preInnerList: EntityCompletelyListItemType[],
      preOuterList: EntityCompletelyListItemType[],
      extendInnerList: EntityCompletelyListItemType[],
      extendOuterList: EntityCompletelyListItemType[]
    }>({
      apiPath: ApiPathEnum.GetNoAuthEdgesByKnowledgeEntityId,
      requestBody: params
    });
  }
}