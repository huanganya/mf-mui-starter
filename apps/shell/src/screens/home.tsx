import { GlobalDataContext } from '@mf-mui-starter/app-shared/app-manager';
import { ArrowRightAltOutlined, MessageOutlined } from '@mui/icons-material';
import { Card, Grid, Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import TasksCard, { TaskItem } from "apps/shell/src/components/home/tasks-card"
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeCalendar } from '../components/home/home-calendar';
import { HomeCarousel } from '../components/home/home-carousel';
import ProfileCard from "apps/shell/src/components/home/profile-card"

export const Home = ({ title }: { title: string }) => {
  const { counter, setCounter } = useContext(GlobalDataContext);
  const navigate = useNavigate();
  const [listOfTasks, setListOfTasks] = useState<TaskItem[]>([]);
  const [numberOfTasks, setNumberOfTasks] = useState<number>(0);

  useEffect(() => {
    //simulate api call
    setListOfTasks([
      {
        id: '1',
        taskTitle: 'Macrodata Refinement:Remove Scary Numbers',
        taskCategory: 'MDR',
        taskIcon: <MessageOutlined style={{ height: '20px', width: '20px' }} />,
        buttonText: 'Click to Confirm',
        buttonClass: 'primary',
        buttonIcon: <ArrowRightAltOutlined />,
        handleButtonFunction: () => {
          console.log('button click works');
        },
      },
      {
        id: '2',
        taskTitle: 'Optics and Design:Hang Up New Paintings',
        taskCategory: 'O&D',
        taskIcon: <MessageOutlined style={{ height: '20px', width: '20px' }} />,
        buttonText: 'Click to Confirm',
        buttonClass: 'primary',
        buttonIcon: <ArrowRightAltOutlined />,
        handleButtonFunction: () => {
          console.log('button click works');
        },
      },
    ]);
    setNumberOfTasks(2);
  }, []);

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Card>
          <Typography variant="h5" sx={{ textAlign: 'center' }}>
            It is the Host App: Top Item{' '}
          </Typography>
        </Card>
      </Grid>
      <Grid item container spacing={3}>
        <Grid item container direction="column" md={4} spacing={3}>
          <Grid item>
            {/* <LeftCardTop /> */}
            <ProfileCard
              userData={{
                userName: 'Davin Lesmana',
                userNRIC: 'S3279307Z',
                userPicture:
                  'https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png',
              }}
            />
          </Grid>
          <Grid item>
            {/* <LeftCardBottom /> */}
            <TasksCard
              numberOfTasks={numberOfTasks}
              listOfTasks={listOfTasks}
            />
          </Grid>
        </Grid>
        <Grid item container direction="column" md={8} spacing={3}>
          <Grid item>
            <HomeCarousel />
          </Grid>
          <Grid item>
            <HomeCalendar />
          </Grid>
          <Grid item>
            <Typography variant="subheader">
              Main content
              <p>
                It will hold the dashboard of the main app.
                <Link onClick={() => navigate('/remote/path2')}>
                  Click here to a remote's path
                </Link>
              </p>
            </Typography>
            <button onClick={() => setCounter(counter + 1)}>
              counter {counter}
            </button>{' '}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
