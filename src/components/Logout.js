import React from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection } from './common';

const Logout = ({ user, onPressLogout }) => {
    return (
        <Card>
            <CardSection>
                <Text style={styles.emailStyle}>
                    User: {user.email}
                </Text>
            </CardSection>
            <CardSection>
                <Button onPress={onPressLogout}>
                    Log Out
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    emailStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#007aff'
    }
};

export default Logout;
