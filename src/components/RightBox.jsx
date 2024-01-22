import React from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createData(name, calories, fat, carbs, protein) {
   return { name, calories, fat, carbs, protein };
}

const rows = [
   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
   createData('Eclair', 262, 16.0, 24, 6.0),
   createData('Cupcake', 305, 3.7, 67, 4.3),
   createData('Gingerbread', 356, 16.0, 49, 3.9),
];





function RightBox({ todoes, loading, setLoading }) {
   return (
      <div className='flex flex-col bg-gray-100 w-[70%]'>
         <Box sx={{ width: '100%' }}>
            {loading ? <LinearProgress color='secondary' /> : ''}
         </Box>
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell>SR#</TableCell>
                     <TableCell align="right">TODO TITLE</TableCell>
                     <TableCell align="right">TODO CONTENT</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  { todoes?.map((todo, key) => (
                     <TableRow
                        key={key}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                        <TableCell component="th" scope="row">{key}</TableCell>
                        <TableCell align="right">{todo.title}</TableCell>
                        <TableCell align="right">{todo.content}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </div>
   )
}

export default RightBox