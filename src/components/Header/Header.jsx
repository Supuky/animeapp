import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';


// styled

const CustomSearch = styled('div')({
    position: 'relative'
})



const Header = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5'>
                    Travel Advisor
                </Typography>
                <Box display='flex'>
                    <Typography variant='h6'>
                        場所を探す
                    </Typography>
                    {/* <Autocomplete> */}
                        <CustomSearch>
                            <div>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder='検索'/>
                        </CustomSearch>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;