export interface Ticket {
    id: number;
    title: string;
    requestText: string;
    status: 'open' | 'closed';
}