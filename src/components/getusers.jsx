import React, { Component } from 'react'

class getusers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Get Users</h2>
                <div className='row'>
                    <table className='table table-stripped table-bordered'>
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Second Name</th>
                                <th>Employee Third Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    users =>
                                        <tr key={users.id} >
                                            <td> {users.name} </td>
                                            <td> {users.email} </td>
                                            <td> {users.dob} </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default getusers
