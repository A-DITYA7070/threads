import { Stack, CircularProgress } from "@mui/material";

const Loader = () => {
    return (
        <Stack 
            flexDirection={'row'}
            minHeight={'50vh'}
            width={'100%'}
            justifyContent={'center'}
            alignItems={'center'}
            my={5}
        >
            <CircularProgress color="success"/>

        </Stack>
    )

}

export default Loader;