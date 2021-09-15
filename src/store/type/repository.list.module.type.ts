/**
 * @author songxiwen
 * @date  2021/9/14 23:31
 */

import type { EntityCompletelyListItemType } from 'edu-graph-constant';

export type RepositoryListType = {
  ownRepositoryList: EntityCompletelyListItemType[];
  followerRepositoryList: EntityCompletelyListItemType[],
  followerRepositoryListTotal?: number
}
