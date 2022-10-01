import React from "react";
import { Component } from "react";
import BookingsService from "../../../../api/services/BookingsService";
import moment from 'moment';

class ListAllBookingsComponent extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            bookings: []
        }
    }

    componentDidMount() {
        BookingsService.getAllBookings().then((res) => {
            this.setState({ bookings: res.data });
        });
    }

    render()
    {
        return (
            <div>
                <section>
                    <div>
                        <div className="container">
                            <div className="masthead-subheading">Find Bookings information below</div>
                        </div>
                        <div>{ this.state.message && <div className='alert alert-success'>{this.state.message}</div> }</div>
                        <div className="container">
                        <br/>
                            <table className="table table-hover table-responsive-sm">
                                <thead className="thead-dark">
                                    <tr>
                                    <th>Booking ID</th>
                                        <th>Booking Date</th>
                                        <th>Room No</th>
                                        <th>Check-In</th>
                                        <th>Check-Out</th>
                                        <th>No Of Days</th>
                                        <th>No Of Adults</th>
                                        <th>No Of Children</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.bookings.map(
                                            booking =>
                                                <tr key={booking.id}>
                                                    <td>#{booking.id}</td>
                                                    <td>{moment(booking.time).format('YYYY-MM-DD')}</td>
                                                    <td>{booking.roomNo}</td>
                                                    <td>{booking.checkIn}</td>
                                                    <td>{booking.checkOut}</td>
                                                    <td>{booking.noOfDays}</td>
                                                    <td>{booking.noOfAdults}</td>
                                                    <td>{booking.noOfChildren}</td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ListAllBookingsComponent;