import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const weekDaysNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

class CalendarDay extends React.Component {
  constructor(props) {
    super(props);
    this.onDayPress = this.onDayPress.bind(this);
  }

  getContentStyle() {
    const { state, marking = {}, date, current } = this.props;
    const style= {
      content: {},
      text: {
        color: '#181c26'
      }
    };

    if (marking.soldOut) {
      style.text.color = '#fff';
      style.content.backgroundColor = '#F5914E';
      style.content.borderRadius = 50;
    } else if (marking.blocked) {
      style.text.color = '#fff';
      style.content.backgroundColor = '#F5914E';
      style.content.borderRadius = 50;
    } else if (state === 'disabled') {
      style.text.color = '#c1c2c1';
    } else if (state === 'today') {
      style.text.color = '#fff';
      style.content.backgroundColor = '#F5914E';
      style.content.borderRadius = 50;
    } else if (current === date.dateString) {
      style.content.borderRadius = 50;
      style.content.borderWidth = 1;
      style.content.borderColor = '#F5914E';
    }

    return style;
  }

  getFooterTextStyle() {
    const { marking = {} } = this.props;
    const style = {
      color: '#c1c2c1'
    };

    if (marking.inventory > 0) {
      style.color = '#F5914E';
    }
    return style;
  }

  getInventoryCount() {
    const { marking = {} } = this.props;
    if (typeof marking === 'object') {
      if (marking.inventory >= 0) {
        return marking.inventory;
      }
    }
    return '';
  }

  onDayPress() {
    this.props.onPress(this.props.date);
  }

  render() {
    const contentStyle = this.getContentStyle();
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {
            this.props.horizontal ?
              <Text style={styles.weekName} numberOfLines={1}>
                {
                  weekDaysNames[this.props.date.weekDay].charAt(0)
                }
              </Text>
              :
              null
          }
        </View>
        <TouchableOpacity
          style={[styles.content, contentStyle.content]}
          onPress={this.onDayPress}
        >
          <Text style={[styles.contentText, contentStyle.text]}>
            {String(this.props.children)}
          </Text>
        </TouchableOpacity>
        {/* <View>
          <Text style={this.getFooterTextStyle()}>
            {this.getInventoryCount()}
          </Text>
        </View> */}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
    marginRight: 7
  },
  weekName: {
    width: 32,
    textAlign: 'center',
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#7c7c7c'
  },
  content: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentText: {
    fontSize: 18
  }
});

export default CalendarDay;