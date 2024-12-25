// import { useState } from "react";
// import LoadingSpinner from "../../../../components/Shared/LoadingSpinner/LoadingSpinner";
// import UserDataRow from "./UserDataRow";
// import useAxiosSecure from "../../../../hooks/useAxiosSecure";
// import toast from "react-hot-toast";
// import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { useEffect, useState } from "react";


const Users = () => {
//   // const { users, userLoading, refetch } = useUsers();
//   const axiosSecure = useAxiosSecure();
//   const [users,setUsers] = useState([])
//    const [currentPage, setCurrentPage] = useState(1);
//    const [itemPerPage, setItemPerPage] = useState(5);
//      const [search, setSearch] = useState("");
//      const [searchText, setSearchText] = useState("");
//     const [count, setCount] = useState(0);
//     const numberOfPages = Math.ceil(count / itemPerPage);
//     const pages = [...Array(numberOfPages).keys()].map(
//       (element) => element + 1
//     );


//     const {
//       data = [],
//       isLoading,
//       refetch,
//       isError,
//       error,
//     } = useQuery({
//       queryKey: ["all-users", currentPage, itemPerPage, search],
//       enabled: !!localStorage.getItem("access-token"),
//       queryFn: async () => {
//         const { data } = await axiosSecure(
//           `/all-users?page=${currentPage}&size=${itemPerPage}&search=${search}`
//         );
//         setUsers(data);
//         return data;
//       },
//     });


//       const {
//         data: countData = [],
//         isLoading: countIsLoading,
//         refetch: countRefetch,
//         isError: countIsError,
//         error: countError,
//       } = useQuery({
//         queryKey: ["users-count",search],
//         enabled: !!localStorage.getItem("access-token"),
//         queryFn: async () => {
//           const { data } = await axiosSecure(`/users-count?search=${search}`);
//           setCount(data.count);
//           return data;
//         },
//       });


//   if (isLoading || countIsLoading) return <LoadingSpinner />;

//     if (isError || countError) {
//       toast.error(error.message);
//     }



//     const handleSearch = (e) => {
//       e.preventDefault();
//       setSearch(searchText.trim());
//       setCurrentPage(1)
//       refetch();
//     };


//      const handlePaginationButton = (value) => {
//        console.log(value);
//        setCurrentPage(value);
//        refetch()
//      };

const [users, setUsers] = useState([]);
const [error, setError] = useState('');


useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/admin');
        console.log(response.data.users)
        setUsers(response.data.users);
        setError('');
      } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
          setError(error.response.data.error);
        } else {
          setError('Failed to fetch users. Please try again.');
        }
      }
    };

    fetchUsers();
  }, []);

  console.log('user',users)


  return (
    <div>
      <section className="container px-4 mx-auto pt-12">
        <div className="flex items-center gap-x-3">
          <h2 className="text-4xl font-medium text-gray-800 ">Users</h2>

          <span className="px-3 text-2xl  py-1  text-blue-600 bg-blue-100 rounded-full ">
            {users?.length > 0 && users?.length}
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg shadow-xl">
                <table className="min-w-full mx-auto divide-y divide-gray-200">
                  <thead className="bg-gray-200">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-[#4D95EA]"
                      >
                        #
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-[#4D95EA]"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-[#4D95EA]"
                      >
                        <span>Phone</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-[#4D95EA]"
                      >
                        <span>Role</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {users?.length > 0 &&
                      users?.map((user, index) => (
                        <tr key={user?.id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{index + 1}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{user?.name}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{user?.phone}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{user?.role}</p>
                        </td>
                  
                      </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Users