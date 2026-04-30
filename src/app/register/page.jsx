"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

export default function RegisterPage() 
{

    const router = useRouter();

  const onSubmit = async (e) => 
{
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());


    // console.log(data);

    const {data, error} = await authClient.signUp.email({
        email: userData.email,
        password: userData.password,
        name: userData.name,
        image: userData.image
    })

    // console.log(data,error);

    if(error){
        alert(error.message);
    }
    if(data){
        alert("Registered successfully! Please log in.");
        router.push("/signin");
    }




  };

  return (
    <Card className="shadow-2xl mx-auto w-[90%] md:w-125 py-10 mt-5 bg-amber-50">
      <h1 className="font-black text-2xl text-center bg-linear-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">Register</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit" className="bg-linear-to-r from-yellow-500 via-orange-500 bg-red-500">
            <Check />
            Register 
          </Button>
          <Button type="reset" variant="secondary" className="bg-gray-200 text-gray-700 hover:bg-gray-300">
            Reset
          </Button>
        </div>
      </Form>
    </Card>
  );
}