import React, {Component} from 'react';
import {Image, ScrollView, StatusBar, View, StyleSheet} from 'react-native';

import Canvas, {Image as CanvasImage, Path2D, ImageData} from 'react-native-canvas';
import IMG from "./src/pic";

const Example = ({sample, children}) => (
  <View style={styles.example}>
    <View style={styles.exampleLeft}>{children}</View>
    <View style={styles.exampleRight}>
      <Image source={sample} style={{width: 100, height: 100}} />
    </View>
  </View>
);

export default class App extends Component {
  handleImageData(canvas) {
    if(!canvas) return;

    canvas.width = 100;
    canvas.height = 100;

    const context = canvas.getContext('2d');
    context.fillStyle = '#DDFFCC';
    context.fillRect(0, 0, 100, 100);

    context.getImageData(0, 0, 100, 100).then(async imageData => {
      const data = Object.values(imageData.data);
      const length = Object.keys(data).length;
      // console.log("imageData", imageData);
      // console.log("data",data);
      for (let i = 0; i < length; i += 4) {
        data[i] = 0;
        data[i + 1] = 0;
        data[i + 2] = 0;
      }
      const imgData = new ImageData(canvas, data, 100, 100);
      let a = context.putImageData(imgData, 0, 0);
      
    });
  }

  async handlePurpleRect(canvas) {
    if(!canvas) return;
    canvas.width = 100;
    canvas.height = 100;

    const context = canvas.getContext('2d');

    context.fillStyle = 'purple';
    context.fillRect(0, 0, 100, 100);

    const {width} = await context.measureText('yo');
  }

  handleRedCircle(canvas) {
    if(!canvas) return;
    canvas.width = 100;
    canvas.height = 100;

    const context = canvas.getContext('2d');

    context.fillStyle = 'red';
    context.arc(50, 50, 49, 0, Math.PI * 2, true);
    context.fill();
  }

  handleImageRect(canvas) {
    if(!canvas) return;
    const image = new CanvasImage(canvas);
    canvas.width = 100;
    canvas.height = 100;

    const context = canvas.getContext('2d');

    image.src = 'https://upload.wikimedia.org/wikipedia/commons/6/63/Biho_Takashi._Bat_Before_the_Moon%2C_ca._1910.jpg';
    image.addEventListener('load', () => {
      context.drawImage(image, 0, 0, 100, 100);
    });
  }

  handlePath(canvas) {
    if(!canvas) return;
    canvas.width = 100;
    canvas.height = 100;
    const context = canvas.getContext('2d');

    context.fillStyle = 'red';
    context.fillRect(0, 0, 100, 100);

    const ellipse = new Path2D(canvas);
    ellipse.ellipse(50, 50, 25, 35, (45 * Math.PI) / 180, 0, 2 * Math.PI);
    context.fillStyle = 'purple';
    context.fill(ellipse);

    context.save();
    context.scale(0.5, 0.5);
    context.translate(50, 20);
    const rectPath = new Path2D(canvas, 'M10 10 h 80 v 80 h -80 Z');

    context.fillStyle = 'pink';
    context.fill(rectPath);
    context.restore();
  }

  async handleGradient(canvas) {
    if(!canvas) return;
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    const gradient = await ctx.createLinearGradient(0, 0, 200, 0);
    gradient.addColorStop(0, 'green');
    gradient.addColorStop(1, 'white');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 100, 100);
  }

  handleEmbedHTML(canvas) {
    if(!canvas) return;
    const image = new CanvasImage(canvas);
    canvas.width = 100;
    canvas.height = 100;

    const context = canvas.getContext('2d');

    const htmlString = '<b>Hello, Worldaaa!</b>';
    const svgString = `
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 40px; background: lightblue; width: 100vw; height: 100vh;">
          <span style="background: pink;">
            ${htmlString}
          </span>
        </div>
    </foreignObject>
</svg>
`;
    image.src = `data:image/svg+xml,${encodeURIComponent(svgString)}`;

    image.addEventListener('load', () => {
      context.drawImage(image, 0, 0, 100, 100);
    });
  }

  myTest = (canvas) => {
    if(!canvas) return;
    const image = new CanvasImage(canvas,100,200);
    const context = canvas.getContext('2d');

    console.log("canvase",canvas);

    canvas.width = 200;
    canvas.height = 100;

    image.height = 100;
    image.width = 200;
    
    // image.crossOrigin = "anonymous";
    image.addEventListener("load",(async ()=>{
      console.log("ccc");
      context.drawImage(image, 0, 0, 200, 100);
      // context.fillStyle = "#FFDD11";
      // context.fillRect(0,0,200,100);
      context.fillStyle = "#FF0011";
      context.fillText("我是誰",30,70);
      context.strokeText("測試測試",10,20);
      let output = await canvas.toDataURL("image/jpeg");
      console.debug("output",output);
    }));

    image.addEventListener('error', err => console.log(err))

      // context.fillRect(0,0,200,100);
    // let img = `https://ichef.bbci.co.uk/news/640/cpsprodpb/172FF/production/_110957949_27aeb6ba-73c3-4c71-86bf-e885d7711975.jpg`;
    // let img = "https://storage.googleapis.com/www-cw-com-tw/article/201810/article-5bd182cf13ebb.jpg";
    let img = IMG;
    console.log("img",img);
    image.src = img;
    
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <ScrollView style={styles.examples}>
          {/* <Example sample={require('./images/purple-black-rect.png')}>
            <Canvas ref={this.handleImageData} />
          </Example>
          <Example sample={require('./images/purple-rect.png')}>
            <Canvas ref={this.handlePurpleRect} />
          </Example>
          <Example sample={require('./images/red-circle.png')}>
            <Canvas ref={this.handleRedCircle} />
          </Example>
          <Example sample={require('./images/image-rect.png')}>
            <Canvas ref={this.handleImageRect} />
          </Example>
          <Example sample={require('./images/path.png')}>
            <Canvas ref={this.handlePath} />
          </Example>
          <Example sample={require('./images/gradient.png')}>
            <Canvas ref={this.handleGradient} />
          </Example> */}
          <Example sample={require('./images/embed-html.png')}>
            <Canvas ref={this.handleEmbedHTML} />
          </Example>
          <Canvas ref={this.myTest}/>
        </ScrollView>
      </View>
    );
  }
}

const commonStyles = StyleSheet.create({
  full: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  cell: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    ...commonStyles.full,
  },
  examples: {
    ...commonStyles.full,
    padding: 5,
    paddingBottom: 0,
  },
  example: {
    paddingBottom: 5,
    flex: 1,
    flexDirection: 'row',
  },
  exampleLeft: {
    ...commonStyles.cell,
  },
  exampleRight: {
    ...commonStyles.cell,
  },
});
