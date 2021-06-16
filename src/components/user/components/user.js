import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import get from 'lodash/get';
import {
//   Avatar,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
const _ = { get };

const UserList = () => {
  const dispatch = useDispatch();
  const { UserData } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch({ type: 'USER_REQUEST' });
  }, []);

  return (
    <>
      <div>
        <h1>Users Data</h1>
        <Card>
          <PerfectScrollbar>
            <Box sx={{ minWidth: 1050 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox"></TableCell>
                    <TableCell>Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {console.log("----------------",UserData)}
                  {UserData.slice(0).map((user) => (
                    <TableRow hover key={user.id}>
                      <TableCell padding="checkbox"></TableCell>
                      <TableCell>
                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex'
                          }}
                        >
                          <Typography color="textPrimary" variant="body1">
                            {user.name}
                          </Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>  
            </Box>
          </PerfectScrollbar>
        </Card>
      </div>
    </>
  );
};
export default UserList;

// <Avatar src={user.avatarUrl} sx={{ mr: 2 }}>
//                             {getInitials(user.title)}
        //    </Avatar>