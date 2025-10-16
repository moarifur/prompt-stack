import { serve } from "inngest/next"
import { inngest } from "@/inngest/client.js"
import {helloWorld} from "@/inngest/functions.js";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        /* your functions will be passed here later! */
        helloWorld,
    ]
})
