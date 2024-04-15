import {gql} from '@apollo/client';

export const TODO_LIST = gql`
query Todos($filter: String, $status: TodoStatus, $searchTerm: String){
    Todos (filter: $filter, status:$status, searchTerm: $searchTerm){
        _id
        name
        status
    }
}
`