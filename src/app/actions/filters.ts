import { apiEndpoint } from 'app/utils/api'
import { Filter } from 'app/models';

export const FILTERS_FETCH: string = 'FILTERS_FETCH'
export const FILTERS_POPULATE: string = 'FILTERS_POPULATE'

export function filtersPopulate(filters: Filter[]): any {
  return { 
    type: FILTERS_POPULATE,
    payload: {
        filters,
    },
  };
}


export const filtersFetch = (): any => async (dispatch: Function) => {
  try {
    const filtersResponse: any  = await fetch(apiEndpoint('filters'));
    const filtersObject: any  = await filtersResponse.json();
    dispatch( filtersPopulate(filtersObject as Filter[]) );
  } catch (error) {

  }
  
}
