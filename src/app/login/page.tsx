import LoginForm from "@/components/login/LoginForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
          <LoginForm/>
        </CardContent>
        <CardFooter className="">
          <Button variant="secondary" className="w-full">
            <Image
              src="/google.png"
              alt="google icon"
              width={16}
              height={16}
              className="mr-1"
            />
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default loginPage;
