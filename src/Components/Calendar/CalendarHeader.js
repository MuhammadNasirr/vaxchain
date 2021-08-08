import React from 'react';
import {
    View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';

const weekDaysNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

class CalendarHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.dateText}>
                        {this.props?.calendarDate || "December 2021"}
                    </Text>
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={this.props.onPressArrowLeft}
                    >
                        <Icon name={"left"} type={"antdesign"} color={"#F5914E"} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={this.props.onPressArrowRight}
                    >
                        <Icon name={"right"} type={"antdesign"} color={"#F5914E"} />
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        style={[
                            styles.iconContainer, {
                                opacity: this.props.horizontal ? 0.2 : 1
                            }
                        ]}
                        onPress={this.props.onPressListView}
                        disabled={this.props.horizontal}
                    >
                        <Icon name={"right"} type={"antdesign"} color={"#F5914E"} />
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity
            style={[
              styles.iconContainer, {
                opacity: this.props.horizontal ? 1 : 0.2
              }
            ]}
            onPress={this.props.onPressGridView}
            disabled={!this.props.horizontal}
          >
            <Image
              style={styles.icon}
              source={require('../../images/grid.png')}
            />
          </TouchableOpacity> */}
                </View>
                {
                    // not showing week day in case of horizontal calendar, this will be handled by day component
                    this.props.horizontal ?
                        null
                        :
                        <View style={styles.week}>
                            {weekDaysNames.map((day, index) => (
                                <Text key={index} style={styles.weekName} numberOfLines={1}>
                                    {day}
                                </Text>
                            ))}
                        </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        padding: 12,
        // backgroundColor: '#eceef1'
    },
    week: {
        marginTop: 7,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    weekName: {
        marginTop: 2,
        marginBottom: 7,
        width: 32,
        textAlign: 'center',
        fontSize: 12,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#7c7c7c'
    },
    dateText: {
        flex: 6,
        color: '#F5914E', fontSize: 18, fontFamily: 'Poppins-Bold',
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftIcon: {
        transform: [{ rotate: '180deg' }]
    },
    icon: {
        width: 24,
        height: 24
    }
});

export default CalendarHeader;