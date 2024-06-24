import React from 'react'
import { ListDataElement } from '../data/element';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hook';
const ListLogins = () => {
// const {logins} = ListDataElement
 const { logins} = useAppSelector(
   (state: any) => state.logins
 ) || [];
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {logins?.length > 0 ? (
            logins?.map((login, index) => (
              <tr
                key={login?.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {login?.name}
                </th>
                <td className="px-6 py-4">asdasd</td>
                <td className="px-6 py-4">asdasd</td>
                <td className="px-6 py-4">asdasd</td>
                <td className="px-6 py-4">
                  <Link
                    to={`${login?.id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <div className=" w-full h-40 flex items-center justify-center">
              <p>Trống</p>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListLogins