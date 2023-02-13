import Box from '@mui/material/Box';
import InternList from '../components/InternList';
import ProfileFilters from '../components/ProfileFilters';
import { styled } from '@mui/system';
import Typography from "@mui/material/Typography";
import Skeleton from '@mui/material/Skeleton';
import { useAtom } from 'jotai';
import { startDateFilterAtom } from '../jotai/filtersAtom';
import { useEffect } from 'react';

const Home = () => {
  const [, setDate] = useAtom(startDateFilterAtom);

  useEffect(() => {
    setDate([]);
    // TODO : clear all filters on load?
  }, [])

  return (
    <Box sx={{ width: { xs: '100%', md: '600px' } }}>
      <TitleContainer>
        <PageTitle>Find Roomates</PageTitle>
      </TitleContainer>
      <ProfileFilters />
      <InternList />
    </Box>
  )
}


export const HomeSkeleton = () => {
  return (
    <Box sx={{ width: { xs: '100%', md: '600px' } }}>
      <TitleContainer>
        <PageTitle><Skeleton width={'300px'} /></PageTitle>
      </TitleContainer>
    </Box>
  )
}

export default Home;

const TitleContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))

export const PageTitle = styled(Typography)(() => ({
  fontSize: '2rem',
  fontWeight: '600',
  textAlign: 'center'
}))