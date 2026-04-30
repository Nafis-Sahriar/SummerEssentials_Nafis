"use client";

import { authClient } from "@/lib/auth-client";
import {PersonPencil} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { FaCheck, FaUserEdit } from "react-icons/fa";

export function UpdateUserModal() {

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;

        if(!name || !image){
            alert("Please fill in all fields");
            return;
        }

        // console.log({image, name})

        await authClient.updateUser({
            name : name,
            image: image
        })

    };


  return (
    <Modal>
      <Button variant="secondary" className="bg-linear-to-r text-white from-orange-400 to-orange-600">
       <FaUserEdit></FaUserEdit> Edit Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-orange-600">
                <PersonPencil></PersonPencil>
              </Modal.Icon>
              <Modal.Heading>Edit Profile Info</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                  <TextField isRequired className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField isRequired className="w-full" name="image" type="text">
                    <Label>Photo URL</Label>
                    <Input placeholder="Enter your new photo URL" />
                  </TextField>
                   <Modal.Footer>
              <Button slot="close" variant="outline" className="border-gray-300 hover:bg-gray-100">
                Cancel
              </Button>
              <Button slot="close" type="submit"  className="bg-linear-to-r from-orange-400 to-orange-600 font-bold">
                Save Changes <FaCheck />
              </Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
           
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}