import React from 'react';
import { useRouter } from 'next/router';
import MainLayout from '@/layouts/MainLyaouts'
import { Grid, Card, Box, Button } from '@mui/material';

const Index = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ minWidth: '100%' }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button onClick={() => router.push('/tracks/create')}>
                Загрузить
              </Button>
            </Grid>
          </Box>
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;