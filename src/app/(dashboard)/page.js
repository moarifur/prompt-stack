import prisma from '@/lib/db'
import {Button} from "@/components/ui/button";

const HomePage = async () => {
    const users = await prisma.user.findMany()
    return (
        <>
            <h1 className={`text-5xl`}>My Users</h1>
            <br/>

            {JSON.stringify(users, null, 2)}

            <Button>Submit</Button>
        </>
    );
};

export default HomePage;