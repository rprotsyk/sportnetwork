import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './dashboard.scss';
import { Photo } from '@sportnetwork/shared-components'
import { UserProfile } from '@sportnetwork/shared-contracts';
export interface DashboardProps {}

const Profile = () => {
  const profile = {firstName: 'Roman', lastName: 'Protsyk', 
  photoUrl: 'https://scontent.fiev4-1.fna.fbcdn.net/v/t1.0-9/36688585_10156259112735792_5155257912632803328_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=M91Ndu3PaiEAX-F_YU3&_nc_ht=scontent.fiev4-1.fna&oh=51715e458b2dc24a28a9a24b2d57b069&oe=5F457173' } as UserProfile;
  return <Photo profile={profile}></Photo>
};

export const Dashboard = (props: DashboardProps) => {
  return (
    <View style={styles.container}>
      <Text>Using UserProfile class from shared lib</Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
