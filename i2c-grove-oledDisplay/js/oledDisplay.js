// Source : http://wiki.seeedstudio.com/wiki/Grove_-_OLED_Display_128*64

const OLED_CONST = {
  basicFont : [
    [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
    [0x00,0x00,0x5F,0x00,0x00,0x00,0x00,0x00],
    [0x00,0x00,0x07,0x00,0x07,0x00,0x00,0x00],
    [0x00,0x14,0x7F,0x14,0x7F,0x14,0x00,0x00],
    [0x00,0x24,0x2A,0x7F,0x2A,0x12,0x00,0x00],
    [0x00,0x23,0x13,0x08,0x64,0x62,0x00,0x00],
    [0x00,0x36,0x49,0x55,0x22,0x50,0x00,0x00],
    [0x00,0x00,0x05,0x03,0x00,0x00,0x00,0x00],
    [0x00,0x1C,0x22,0x41,0x00,0x00,0x00,0x00],
    [0x00,0x41,0x22,0x1C,0x00,0x00,0x00,0x00],
    [0x00,0x08,0x2A,0x1C,0x2A,0x08,0x00,0x00],
    [0x00,0x08,0x08,0x3E,0x08,0x08,0x00,0x00],
    [0x00,0xA0,0x60,0x00,0x00,0x00,0x00,0x00],
    [0x00,0x08,0x08,0x08,0x08,0x08,0x00,0x00],
    [0x00,0x60,0x60,0x00,0x00,0x00,0x00,0x00],
    [0x00,0x20,0x10,0x08,0x04,0x02,0x00,0x00],
    [0x00,0x3E,0x51,0x49,0x45,0x3E,0x00,0x00],
    [0x00,0x00,0x42,0x7F,0x40,0x00,0x00,0x00],
    [0x00,0x62,0x51,0x49,0x49,0x46,0x00,0x00],
    [0x00,0x22,0x41,0x49,0x49,0x36,0x00,0x00],
    [0x00,0x18,0x14,0x12,0x7F,0x10,0x00,0x00],
    [0x00,0x27,0x45,0x45,0x45,0x39,0x00,0x00],
    [0x00,0x3C,0x4A,0x49,0x49,0x30,0x00,0x00],
    [0x00,0x01,0x71,0x09,0x05,0x03,0x00,0x00],
    [0x00,0x36,0x49,0x49,0x49,0x36,0x00,0x00],
    [0x00,0x06,0x49,0x49,0x29,0x1E,0x00,0x00],
    [0x00,0x00,0x36,0x36,0x00,0x00,0x00,0x00],
    [0x00,0x00,0xAC,0x6C,0x00,0x00,0x00,0x00],
    [0x00,0x08,0x14,0x22,0x41,0x00,0x00,0x00],
    [0x00,0x14,0x14,0x14,0x14,0x14,0x00,0x00],
    [0x00,0x41,0x22,0x14,0x08,0x00,0x00,0x00],
    [0x00,0x02,0x01,0x51,0x09,0x06,0x00,0x00],
    [0x00,0x32,0x49,0x79,0x41,0x3E,0x00,0x00],
    [0x00,0x7E,0x09,0x09,0x09,0x7E,0x00,0x00],
    [0x00,0x7F,0x49,0x49,0x49,0x36,0x00,0x00],
    [0x00,0x3E,0x41,0x41,0x41,0x22,0x00,0x00],
    [0x00,0x7F,0x41,0x41,0x22,0x1C,0x00,0x00],
    [0x00,0x7F,0x49,0x49,0x49,0x41,0x00,0x00],
    [0x00,0x7F,0x09,0x09,0x09,0x01,0x00,0x00],
    [0x00,0x3E,0x41,0x41,0x51,0x72,0x00,0x00],
    [0x00,0x7F,0x08,0x08,0x08,0x7F,0x00,0x00],
    [0x00,0x41,0x7F,0x41,0x00,0x00,0x00,0x00],
    [0x00,0x20,0x40,0x41,0x3F,0x01,0x00,0x00],
    [0x00,0x7F,0x08,0x14,0x22,0x41,0x00,0x00],
    [0x00,0x7F,0x40,0x40,0x40,0x40,0x00,0x00],
    [0x00,0x7F,0x02,0x0C,0x02,0x7F,0x00,0x00],
    [0x00,0x7F,0x04,0x08,0x10,0x7F,0x00,0x00],
    [0x00,0x3E,0x41,0x41,0x41,0x3E,0x00,0x00],
    [0x00,0x7F,0x09,0x09,0x09,0x06,0x00,0x00],
    [0x00,0x3E,0x41,0x51,0x21,0x5E,0x00,0x00],
    [0x00,0x7F,0x09,0x19,0x29,0x46,0x00,0x00],
    [0x00,0x26,0x49,0x49,0x49,0x32,0x00,0x00],
    [0x00,0x01,0x01,0x7F,0x01,0x01,0x00,0x00],
    [0x00,0x3F,0x40,0x40,0x40,0x3F,0x00,0x00],
    [0x00,0x1F,0x20,0x40,0x20,0x1F,0x00,0x00],
    [0x00,0x3F,0x40,0x38,0x40,0x3F,0x00,0x00],
    [0x00,0x63,0x14,0x08,0x14,0x63,0x00,0x00],
    [0x00,0x03,0x04,0x78,0x04,0x03,0x00,0x00],
    [0x00,0x61,0x51,0x49,0x45,0x43,0x00,0x00],
    [0x00,0x7F,0x41,0x41,0x00,0x00,0x00,0x00],
    [0x00,0x02,0x04,0x08,0x10,0x20,0x00,0x00],
    [0x00,0x41,0x41,0x7F,0x00,0x00,0x00,0x00],
    [0x00,0x04,0x02,0x01,0x02,0x04,0x00,0x00],
    [0x00,0x80,0x80,0x80,0x80,0x80,0x00,0x00],
    [0x00,0x01,0x02,0x04,0x00,0x00,0x00,0x00],
    [0x00,0x20,0x54,0x54,0x54,0x78,0x00,0x00],
    [0x00,0x7F,0x48,0x44,0x44,0x38,0x00,0x00],
    [0x00,0x38,0x44,0x44,0x28,0x00,0x00,0x00],
    [0x00,0x38,0x44,0x44,0x48,0x7F,0x00,0x00],
    [0x00,0x38,0x54,0x54,0x54,0x18,0x00,0x00],
    [0x00,0x08,0x7E,0x09,0x02,0x00,0x00,0x00],
    [0x00,0x18,0xA4,0xA4,0xA4,0x7C,0x00,0x00],
    [0x00,0x7F,0x08,0x04,0x04,0x78,0x00,0x00],
    [0x00,0x00,0x7D,0x00,0x00,0x00,0x00,0x00],
    [0x00,0x80,0x84,0x7D,0x00,0x00,0x00,0x00],
    [0x00,0x7F,0x10,0x28,0x44,0x00,0x00,0x00],
    [0x00,0x41,0x7F,0x40,0x00,0x00,0x00,0x00],
    [0x00,0x7C,0x04,0x18,0x04,0x78,0x00,0x00],
    [0x00,0x7C,0x08,0x04,0x7C,0x00,0x00,0x00],
    [0x00,0x38,0x44,0x44,0x38,0x00,0x00,0x00],
    [0x00,0xFC,0x24,0x24,0x18,0x00,0x00,0x00],
    [0x00,0x18,0x24,0x24,0xFC,0x00,0x00,0x00],
    [0x00,0x00,0x7C,0x08,0x04,0x00,0x00,0x00],
    [0x00,0x48,0x54,0x54,0x24,0x00,0x00,0x00],
    [0x00,0x04,0x7F,0x44,0x00,0x00,0x00,0x00],
    [0x00,0x3C,0x40,0x40,0x7C,0x00,0x00,0x00],
    [0x00,0x1C,0x20,0x40,0x20,0x1C,0x00,0x00],
    [0x00,0x3C,0x40,0x30,0x40,0x3C,0x00,0x00],
    [0x00,0x44,0x28,0x10,0x28,0x44,0x00,0x00],
    [0x00,0x1C,0xA0,0xA0,0x7C,0x00,0x00,0x00],
    [0x00,0x44,0x64,0x54,0x4C,0x44,0x00,0x00],
    [0x00,0x08,0x36,0x41,0x00,0x00,0x00,0x00],
    [0x00,0x00,0x7F,0x00,0x00,0x00,0x00,0x00],
    [0x00,0x41,0x36,0x08,0x00,0x00,0x00,0x00],
    [0x00,0x02,0x01,0x01,0x02,0x01,0x00,0x00],
    [0x00,0x02,0x05,0x05,0x02,0x00,0x00,0x00]
  ],
  address : 0x3c,
  maxX : 127,
  maxY : 63,
  pageMode : 1,
  horizontalMode : 2,
  commandMode : 0x80,
  dataMode : 0x40,
  displayOffCmd : 0xAE,
  displayOnCmd : 0xAF,
  normalDisplayCmd : 0xA6,
  inverseDisplayCmd : 0xA7,
  activateScrollCmd : 0x2F,
  dectivateScrollCmd : 0x2E,
  setBrightnessCmd : 0x81,
  scrollLeft : 0,
  scrollRight : 1,
  scroll2Frames : 7,
  scroll3Frames : 6,
  scroll4Frames : 5,
  scroll5Frames : 0,
  scroll25Frames : 6,
  scroll64Frames : 1,
  scroll128Frames : 2,
  scroll256Frames : 3,
  packetSize : 16
};

var OledDisplay = function(i2cPort,slaveAddress){
  this.i2cPort = i2cPort;
  this.funcQueue = new Array();
  this.index = 0;
  this.seq = null;
  this.addressingMode = OLED_CONST.pageMode;
};

OledDisplay.prototype = {
  initQ: function(){
    this.registerQueue(OLED_CONST.commandMode,OLED_CONST.displayOffCmd);
    this.registerQueue(OLED_CONST.commandMode,OLED_CONST.displayOnCmd);
    this.registerQueue(OLED_CONST.commandMode,OLED_CONST.normalDisplayCmd);
  },
  putCharQ: function(char){
    var c = char.charCodeAt(0);
    if(c < 32 || c > 127){
      c=32;
    }
    var word = 0;
    for(var i=0;i<8;i++){
      if(i%2){
        word |= (OLED_CONST.basicFont[c-32][i])<<8;
        this.registerQueue(OLED_CONST.dataMode,word);
      }else{
        word = OLED_CONST.basicFont[c-32][i];
      }
    }
  },
  putStringQ: function(string){
    for(var i=0;i < string.length; i++){
      var c =  string.charAt(i);
      this.putCharQ(c);     
    }
  },
  drawStringQ: function(row,col,string){
    this.setTextXYQ(row,col);
    this.putStringQ(string);
  },
  setBrightnessQ: function(Brightness){
    this.registerQueue(OLED_CONST.commandMode,OLED_CONST.Set_Brightness_Cmd);
    this.registerQueue(OLED_CONST.commandMode,Brightness);
  },
  setHorizontalModeQ: function(){
    this.addressingMode = horizontalMode;
    this.registerQueue(OLED_CONST.commandMode,0x20);
    this.registerQueue(OLED_CONST.commandMode,0);
  },
  setPageModeQ: function(){
    this.addressingMode = pageMode;
    this.registerQueue(OLED_CONST.commandMode,0x20);
    this.registerQueue(OLED_CONST.commandMode,0x02);
  },
  setTextXYQ: function(row,col){
    this.registerQueue(OLED_CONST.commandMode,0xB0 + row);
    this.registerQueue(OLED_CONST.commandMode,0x00 + (8*col & 0x0f));
    this.registerQueue(OLED_CONST.commandMode,0x10 + ((8*col>>4)&0x0f));
  },
  clearDisplayQ: function(){
    for(var j=0;j < 8;j ++){
      this.registerQueue(OLED_CONST.commandMode,0xB0+j);
      this.registerQueue(OLED_CONST.commandMode,0);
      this.registerQueue(OLED_CONST.commandMode,0x10);
      for(var i=0;i < 16;i ++){
        this.putCharQ(' ');
      }
    }
  },
  registerQueue: function(mode,param){
    if(this.seq != null){
      console.log("OledDisplay.registerQueue(): error! (now playing)");
      return;
    }
    var obj = {};
    obj.mode = mode;
    obj.param = param;
    this.funcQueue.push(obj);
  },
  playSequence: function(){
    return new Promise((resolve, reject) => {
      this.i2cPort.open(OLED_CONST.address).then((i2cSlave) => {
        this.i2cSlave = i2cSlave;
　　     if(this.seq != null){
   　      console.log("OledDisplay.playSequence(): error! (multiple call)");
    　　　  reject();
    　   }
        this.seq = setInterval(() => {
          for(var cnt=0;cnt < OLED_CONST.packetSize;cnt ++){
            if(this.funcQueue[this.index].mode === OLED_CONST.commandMode){
              this.i2cSlave.write8(OLED_CONST.commandMode,this.funcQueue[this.index].param);
            }else{
              this.i2cSlave.write16(OLED_CONST.dataMode,this.funcQueue[this.index].param);
            }
            this.index ++;
            if(this.index >= this.funcQueue.length){
              clearInterval(this.seq);
              this.seq = null;
              this.index = 0;
              this.funcQueue = [];
              resolve();
              break;
            }
          }
        },1);
      });
    });
  },
  init: function(){
    return new Promise((resolve, reject) => {
      this.i2cPort.open(OLED_CONST.address).then((i2cSlave) =>{
        this.i2cSlave = i2cSlave;
        console.log("i2cPort.open");
        this.initQ();
        this.playSequence().then(() => {resolve()});
      });
    });
  },
  clearDisplay: function(){
    return new Promise((resolve, reject) => {
      this.i2cPort.open(OLED_CONST.address).then((i2cSlave) => {
        this.i2cSlave = i2cSlave;
        console.log("start clearDisplay");
        this.clearDisplayQ();
        this.playSequence().then(() => {resolve()});
      });
    });
  },
  drawString: function(row,col,string){
    return new Promise((resolve, reject) => {
      this.i2cPort.open(OLED_CONST.address).then((i2cSlave) => {
        this.i2cSlave = i2cSlave;
        console.log("start drawString");
        this.drawStringQ(row,col);
        this.playSequence().then(() => {resolve()});
      });
    });
  }
};
