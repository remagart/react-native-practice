import React, { Component } from 'react';
import { View, Text,ScrollView,Dimensions } from 'react-native';
import Swiper from "./Swiper";
import ScrollableTabView,{ScrollableTabBar} from "react-native-scrollable-tab-view";
import MyTabView from "./MyTabView";


const {width,height} = Dimensions.get("window")

export default class App extends Component {
  constructor(props) {
    super(props);
    this.ready = false;
    
    this.testHHH = 1200;
    this.Swipper = 200;

    this.state = {
      hh: 1000,
      hhh: 100,
      testHeight: 100,
      tabHeight: 100,
    };
  }

  componentDidMount(){
    this.ready = true;
  }

  render() {
    return (
      <View style={{flex:1,fontSize:20,backgroundColor:"yellow"}}>
        <View style={{flex:0.2}}>
          <Text style={{color:"red",fontSize:20}}>Top</Text>
        </View>
        <ScrollView 
          style = {{flex:1,backgroundColor: "gray"}}
          contentContainerStyle={{backgroundColor:"red"}}
        >
          <View style={{height:this.state.hh}}
            onLayout={(e)=>{
              console.log("YCC",e.nativeEvent.layout)
              // if(this.ready == true)
              //   this.setState({hh:e.nativeEvent.layout.height})
            }}
          >
            <ScrollableTabView
              renderTabBar={()=><ScrollableTabBar />}
            >
              <View tabLabel="AA" style={{backgroundColor:"blue"}}
                onLayout={(e)=>{
                  console.log("YCC2",e.nativeEvent.layout)
                  // this.setState({hh:e.nativeEvent.layout.height})
                }}
              >
                <View style={{height:this.Swipper+this.state.testHeight}}
                  onLayout={(e)=>{
                    this.setState({hh:e.nativeEvent.layout.height})
                  }}
                >
                  <View style={{width:300,height:this.Swipper}}>
                    <Swiper />
                  </View>
                  {this.renderTest()}
                </View>
                  
              </View>
              <View tabLabel="BB">
                <Text>5e55</Text>
              </View>
            </ScrollableTabView>
          </View>
        </ScrollView>
      </View>
    );
  }

  renderTest = () => {
    return(
      <View style={{flex:1,backgroundColor:"green"}}
        onLayout={(e)=>{
          console.log("testest111111",e.nativeEvent.layout.height);
          this.setState({tabHeight: e.nativeEvent.layout.height})
        }}
      >
        {/* <View style={{height: this.testHHH,overflow:"hidden",backgroundColor:"green"}}> */}
          <View onLayout={(e)=>{
            console.log("testest",e.nativeEvent.layout.height);
            this.setState({testHeight: e.nativeEvent.layout.height})
          }}>
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text>
            <Text>5</Text>
            <Text>6</Text>
            <Text>7</Text>
            <Text>8</Text>
            <Text>9</Text>
            <Text>10</Text>
            <Text>11</Text>
            <Text>12</Text>
            <Text>13</Text>
            <Text>14</Text>
            <Text>15</Text>
            <Text>16</Text>
            <Text>17</Text>
            <Text>18</Text>
            <Text>19</Text>
            <Text>20</Text>
            <Text>21</Text>
            <Text>22</Text>
            <Text>23</Text>
            <Text>24</Text>
            <Text>25</Text>
            <Text>26</Text>
            <Text>27</Text>
            <Text>28</Text>
            <Text>29</Text>
            <Text>30</Text>
            <Text>31</Text>
            <Text>32</Text>
            <Text>33</Text>
            <Text>34</Text>
            <Text>35</Text>
            <Text>36</Text>
            <Text>37</Text>
            <Text>38</Text>
            <Text>39</Text>
            <Text>40</Text>
            <Text>41</Text>
            <Text>42</Text>
            <Text>43</Text>
            <Text>44</Text>
          </View>
          <View style={{flex:1,backgroundColor:"pink"}}
            onLayout={(e)=>{
              console.log("pink",e.nativeEvent.layout.height);
            }}
          />
        </View>
    )
  }
}
