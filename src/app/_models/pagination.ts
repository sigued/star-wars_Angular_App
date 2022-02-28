export interface Pagination {
    count: number;
    next: number;
    previous: number;
}

export class PaginationResult<T> {
    result: T;
}
