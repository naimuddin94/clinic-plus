import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, LogIn } from "lucide-react";
import Image from "next/image";

const loginPage = () => {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Authenticate with your credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input id="name" placeholder="example@mail.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Password</Label>
                <Input id="name" placeholder="*************" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-6">
          <Button className="w-full">
            <LogIn className="w-4 h-4 mr-1" />
            Login
          </Button>
          <Button variant="secondary" className="w-full">
            <Image
              src="/google.png"
              alt="google icon"
              width={16}
              height={16}
              className="mr-1"
            />
            Signin with Google
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default loginPage;
