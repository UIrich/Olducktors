import '../App.css';
import Reset from '../components/Reset.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function ResetPassword() {
    return (
    <div class="Reset">
    <ChakraProvider>
        <Reset/>
    </ChakraProvider>
    </div>

    );
}

export default ResetPassword;