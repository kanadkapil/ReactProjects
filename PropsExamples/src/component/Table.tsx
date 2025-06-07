import React from 'react'
import data from '../assets/tableData.json'

interface Props {
    id: number;
    name: string;
    details: string;
    active: boolean;
}

function Table({id,name,details,active}:Props) {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    
                    {/* head */}
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Active</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="hover:bg-base-300">
                                <th>{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.details}</td>
                                <td className='pl-7'>{item.active?"✅":"❌"}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </>)
}

export default Table