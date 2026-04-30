"use client";
import { UpdateUserModal } from "@/Components/UpdateUserModal/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const MyProfile = () => {
  const userData = authClient.useSession();
  const user = userData?.data?.user;

  return (
    <div>
            <h1 className="text-2xl font-bold text-orange-600 text-center mt-5">My Profile</h1>
      <div>
        
      
        {user ? (
          <Card className="max-w-96 mx-auto flex flex-col items-center gap-4 p-6 border mt-10 border-orange-500 rounded-2xl shadow-lg">
            <Avatar className="h-30 w-30 ">
              <Avatar.Image
                alt={user?.name}
                src={user.image}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>


            <h2 className="text-xl font-bold italic">{user?.name}</h2>

            <div>
                <p className="text-gray-600">Email: {user?.email}</p>
                <p className="text-gray-600">User ID: {user?.id}</p>
                <p className="text-gray-600">Joined: {user?.createdAt && new Date(user.createdAt).toLocaleDateString()}</p>
            </div>

            <div>
                 <UpdateUserModal></UpdateUserModal>
            </div>

          </Card>
        ) : (
          <div>Loading.....</div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
