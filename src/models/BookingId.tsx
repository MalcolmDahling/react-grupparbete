export class BookingId {

    constructor(
        public id: number,
        public restaurantId: string,
        public date: Date,
        public time: string,
        public numberOfGuests: number,
        public customerId: string,
    )
{}}