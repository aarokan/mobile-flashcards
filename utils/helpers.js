import { View, StyleSheet, AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'UdaciMobile:notifications'

export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
    return {
        title: 'Take a quizz',
        body : "👋 Don't forget to take a quizz today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
        if (data === null) {
            Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({status}) => {
                Notifications.cancelAllScheduledNotificationsAsync()
                let tomorrow = new Date()
                tomorrow.setDate(tomorrow.getDate() + 1)
                tomorrow.setHours(20)
                tomorrow.setMinutes(0)
                Notifications.scheduleLocalNotificationAsync(
                    createNotification(),
                    {
                        time: tomorrow,
                        repeat: 'day'
                    }
                )
                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            })
        }
    })
}

