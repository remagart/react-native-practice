import React, { Component, } from 'react'
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Image,
    Modal,
    TouchableHighlight,
    DatePickerAndroid,
    TimePickerAndroid,
    DatePickerIOS,
    Platform,
    Animated,
    Keyboard
} from 'react-native';
import Style from "./Style";
import Moment from "moment";

const FORMATS = {
    'date': 'YYYY-MM-DD',
    'datetime': 'YYYY-MM-DD HH:mm',
    'time': 'HH:mm'
};

const SUPPORTED_ORIENTATIONS = ['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right'];


export default class DatePickerHelper extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: this.getDate(),
            modalVisible: false,
            animatedHeight: new Animated.Value(0),
            allowPointerEvents: true
        };
    }

    componentDidMount(){
        const {createRef} = this.props;
        if(createRef)
            createRef(this);
    }

    getDate = (date = this.props.date) => {
        const {mode,format = FORMATS[mode]} = this.props;
        if(!date){
            let now = new Date();
            return now;
        }
        if (date instanceof Date) {
            return date;
        }
        return Moment(date, format).toDate();
    }

    setModalVisible(visible) {
        const {height, duration} = this.props;
    
        // slide animation
        if (visible) {
            this.setState({modalVisible: visible});
            return Animated.timing(
                this.state.animatedHeight,
                {
                    toValue: height,
                    duration: duration
                }
            ).start();
        } else {
            return Animated.timing(
                this.state.animatedHeight,
                {
                    toValue: 0,
                    duration: duration
                }
            ).start(() => {
                this.setState({modalVisible: visible});
            });
        }
    }

    onPressDate = () => {
        console.log("YCC here");
        Keyboard.dismiss();

        // reset state
        this.setState({
            date: this.getDate()
        });
    
        if (Platform.OS === 'ios') {
            this.setModalVisible(true);
        } else {
          const {mode} = this.props;
    
          // 选日期
          if (mode === 'date') {
            DatePickerAndroid.open({
                date: this.state.date,
                androidMode: "default"
              
            }).then(this.onDatePicked);
          } else if (mode === 'time') {
            // 选时间
    
            let timeMoment = Moment(this.state.date);
    
            TimePickerAndroid.open({
              hour: timeMoment.hour(),
              minute: timeMoment.minutes(),
              is24Hour: is24Hour,
              mode: "default"
            }).then(this.onTimePicked);
          } 
        }
    }

    onPressMask = () => {
        if (typeof this.props.onPressMask === 'function') {
          this.props.onPressMask();
        } else {
          this.onPressCancel();
        }
      }

    onPressCancel = () => {
    this.setModalVisible(false);

    if (typeof this.props.onCloseModal === 'function') {
        this.props.onCloseModal();
    }
    }

    render() {
        const {
            mode,
            style,
            customStyles,
            disabled,
            minDate,
            maxDate,
            minuteInterval,
            timeZoneOffsetInMinutes,
            cancelBtnText,
            confirmBtnText,
            TouchableComponent,
            testID,
            cancelBtnTestID,
            confirmBtnTestID,
            allowFontScaling,
            locale
          } = this.props;


        return (
            
            <View style={Style.dateTouchBody}>
                <Text>456</Text>
                {Platform.OS === 'ios' && <Modal
                    transparent={true}
                    animationType="none"
                    visible={this.state.modalVisible}
                    supportedOrientations={SUPPORTED_ORIENTATIONS}
                    onRequestClose={() => {this.setModalVisible(false);}}
                >
                    <View style={{flex: 1}}>
                        <TouchableComponent
                            style={Style.datePickerMask}
                            activeOpacity={1}
                            underlayColor={'red'}
                            onPress={this.onPressMask}
                        > 
                            <TouchableComponent
                                underlayColor={'#fff'}
                                style={{flex: 1}}
                            >
                                <Animated.View
                                    style={[Style.datePickerCon, {height: this.state.animatedHeight}, customStyles.datePickerCon]}
                                >
                                    <View pointerEvents={this.state.allowPointerEvents ? 'auto' : 'none'}>
                                        <DatePickerIOS
                                            date={this.state.date}
                                            mode={mode}
                                            onDateChange={this.onDateChange}
                                            minuteInterval={minuteInterval}
                                            timeZoneOffsetInMinutes={timeZoneOffsetInMinutes ? timeZoneOffsetInMinutes : null}
                                            style={[Style.datePicker, customStyles.datePicker]}
                                            locale={locale}
                                        />
                                    </View>
                                </Animated.View>
                            </TouchableComponent>
                        </TouchableComponent>
                    </View>
                </Modal>
                }
            </View>
           
            
        )
    }
}


DatePickerHelper.defaultProps = {
    mode: 'date',
    androidMode: 'default',
    date: '',
    // component height: 216(DatePickerIOS) + 1(borderTop) + 42(marginTop), IOS only
    height: 259,
  
    // slide animation duration time, default to 300ms, IOS only
    duration: 300,
    confirmBtnText: '确定',
    cancelBtnText: '取消',
    // iconSource: require('./date_icon.png'),
    customStyles: {},
  
    // whether or not show the icon
    showIcon: true,
    disabled: false,
    allowFontScaling: true,
    hideText: false,
    placeholder: '',
    TouchableComponent: TouchableHighlight,
    modalOnResponderTerminationRequest: e => true
  };

DatePickerHelper.propTypes = {
    mode: PropTypes.oneOf(['date', 'datetime', 'time']),
    androidMode: PropTypes.oneOf(['clock', 'calendar', 'spinner', 'default']),
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date), PropTypes.object]),
    format: PropTypes.string,
    minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    height: PropTypes.number,
    duration: PropTypes.number,
    confirmBtnText: PropTypes.string,
    cancelBtnText: PropTypes.string,
    iconSource: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    iconComponent: PropTypes.element,
    customStyles: PropTypes.object,
    showIcon: PropTypes.bool,
    disabled: PropTypes.bool,
    allowFontScaling: PropTypes.bool,
    onDateChange: PropTypes.func,
    onOpenModal: PropTypes.func,
    onCloseModal: PropTypes.func,
    onPressMask: PropTypes.func,
    placeholder: PropTypes.string,
    modalOnResponderTerminationRequest: PropTypes.func,
    is24Hour: PropTypes.bool,
    getDateStr: PropTypes.func,
    locale: PropTypes.string
  };