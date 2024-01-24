"use client";

import { useGetUsersQuery } from "@/redux/services/userApi";
import { decrement, increment, reset } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function Home() {
  const count = useAppSelector((state:any) => state.counterReducer.value);
  const dispatch = useAppDispatch();

  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

  return (
    <main className="lg:text-gray-700 p-5 ms-auto me-auto max-w-6xl sm:text-red-500 md:text-green-500 bg-gray-100">
      <div className="mb-16" style={{ textAlign: "center" }}>
        <h1 className="text-6xl mb-4" >{count}</h1>
        <button className="btn hover:bg-green-700 hover:text-white hover:border-none" onClick={() => dispatch(increment())}>increment</button>
        <button className=" ms-10 me-10 btn hover:bg-gray-800 hover:text-white"
          onClick={() => dispatch(decrement())}
          
        >
          decrement
        </button>
        <button className="font-semibold btn hover:bg-red-600 hover:text-white" onClick={() => dispatch(reset())}>reset</button>
      </div>

      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10"
      
        >
          {data.map((user) => (
            <div className="card hover:shadow-lg"
              key={user.id}
              
            >
              <img className="h-44 w-32"
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                
              />
              <div className="m-3">
              <span className="font-bold text-left">{user.name}</span>
              <span className="block uppercase text-left text-sm">sku {user.id}</span>
              </div>
              <div className="badge">
                <span>SL {user.id+1}</span>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
}
