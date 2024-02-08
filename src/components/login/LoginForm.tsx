"use client";

import React, { FormEvent, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Button } from "../ui/button";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleLogin}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="example@mail.com" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <div className="flex items-center relative">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="*************"
            />
            <Button
              onClick={() => setShowPassword((prevState) => !prevState)}
              variant="link"
              className="absolute right-0"
            >
              {showPassword ? (
                <Eye className="w-5 text-gray-500 cursor-pointer" />
              ) : (
                <EyeOff className="w-5 text-gray-500 cursor-pointer" />
              )}
            </Button>
          </div>
        </div>
      </div>
      <Button type="submit" className="w-full mt-4">
        <LogIn className="w-4 h-4 mr-1" />
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
