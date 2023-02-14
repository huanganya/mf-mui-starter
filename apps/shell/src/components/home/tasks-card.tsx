import {
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

export interface TaskItem {
  id: string;
  taskTitle: string;
  taskCategory: string;
  taskIcon: React.ReactElement;
  buttonText: string;
  buttonClass: string;
  buttonIcon: React.ReactElement;
  handleButtonFunction: () => void;
}

//remove inline styling when figure out how class works

export const TasksCard = (props: {
  listOfTasks: TaskItem[];
  numberOfTasks: number;
}) => {
  const { listOfTasks, numberOfTasks } = props;

  return (
    <Card className="card-style" sx={{ maxWidth: 345, marginBottom: '20px' }}>
      <Box
        style={{
          width: '100%!important',
          height: '10px',
          background: 'linear-gradient(270deg, #6f2bba 0%, #d0343a 100%)',
          borderRadius: '8px 8px 0px 0px',
        }}
      ></Box>
      <Box>
        <Grid item xs={7} sx={{ display: 'flex', alignItems: 'left' }}>
          <Typography
            sx={{
              fontWeight: '700',
              fontSize: 24,
              margin: '20px',
            }}
            id="tableTitle"
          >
            My Tasks
            <Badge
              sx={{ marginLeft: '20px !important' }}
              className="permissionModuleBadge"
              badgeContent={numberOfTasks}
              max={99}
              color="error"
            />
          </Typography>
        </Grid>
      </Box>
      {listOfTasks.map((task: TaskItem, index: number) => {
        return (
          <Box style={{ marginTop: 0, marginLeft: '15px' }}>
            {index > 0 ? (
              <Grid
                item
                xs={12}
                className="DividerView"
                sx={{
                  marginRight: '15px',
                  marginTop: '20px',
                  marginBottom: '20px',
                }}
              >
                <Divider variant="fullWidth" />
              </Grid>
            ) : null}
            <Grid container>
              <Grid container item xs={12}>
                <Grid item xs={1}>
                  {task.taskIcon}
                </Grid>
                <Grid item xs={11}>
                  <Box
                    className="label-style"
                    style={{
                      fontSize: '15px',
                      display: 'flex',
                      alignSelf: 'left',
                      color: '#7D838B',
                      marginBottom: '10px',
                    }}
                  >
                    {task.taskCategory}
                  </Box>
                </Grid>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={1}></Grid>
                <Grid item xs={11}>
                  <Box
                    style={{
                      textAlign: 'left',
                      marginBottom: '20px',
                    }}
                  >
                    {task.taskTitle}
                  </Box>
                  <Button
                    className={task.buttonClass}
                    style={{
                      display: 'flex',
                      alignSelf: 'left',

                      backgroundColor: '#d0343a',
                      color: '#fff',
                      marginBottom: '10px',
                    }}
                    onClick={task.handleButtonFunction}
                    endIcon={task.buttonIcon}
                  >
                    {task.buttonText}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </Card>
  );
};

export default TasksCard;
