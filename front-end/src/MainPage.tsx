import React from 'react';
import {Avatar, Card, Icon} from '@mui/material';

export function MainPage(): React.ReactElement {
    return(
        <Card sx={{ color: 'white', bgcolor: 'primary.light' }}>
            <Avatar sx={{ m: 1, bgcolor: 'primary.dark' }}>
                <Icon>home</Icon>
            </Avatar>
            MUI Skeletons!
        </Card>
    );
}
