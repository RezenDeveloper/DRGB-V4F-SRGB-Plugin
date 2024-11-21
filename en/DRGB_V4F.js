export function Name() {
  return 'DRGB V4F'
}
export function VendorId() {
  return 0x2486
}
export function ProductId() {
  return [0x3636, 0x3628, 0x3616, 0x3608]
}
export function Publisher() {
  return 'YanZhi'
}
export function Size() {
  return [1, 1]
}
export function DefaultPosition() {
  return [160, 100]
}
export function DefaultScale() {
  return 1.0
}
export function Type() {
  return 'Hid'
}
export function SubdeviceController() {
  return true
}
export function DefaultComponentBrand() {
  return 'CompGen'
}

export function ControllableParameters() {
  return [
    {
      property: 'seek',
      group: 'lighting',
      label: 'Seek LEDs',
      type: 'boolean',
      default: 'true',
      description: 'Once enabled, the channel without components will emit a breathing effect matching its channel color. It is recommended to disable this feature after configuration is complete.',
    },
    {
      property: 'HWL_test',
      group: '',
      label: 'Preview Shutdown',
      type: 'boolean',
      default: 'false',
      description: 'Once enabled, you can debug the shutdown and startup lighting effect. After completing the debugging process, click Save at the bottom.',
    },
    {
      property: 'HWL_start',
      group: '',
      label: 'Enable Shutdown Effect',
      type: 'boolean',
      default: 'true',
      description: 'When enabled, the lighting effect will play upon exiting the software or during startup.',
    },
    {
      property: 'HWL_effectMode',
      group: '',
      label: 'Shutdown Effect',
      type: 'combobox',
      values: [
        'Rainbow Wave',
        'Color Shift',
        'Color Breathe',
        'Color Wave',
        'Solid Color',
        'Meteor shower',
        'Visor',
        'Marquee',
        'Color Strobing',
        'Sequential',
        'Browse',
      ],
      default: 'Rainbow Wave'
    },
    {
      property: 'HWL_effectSpeed',
      group: '',
      label: 'Shutdown Effect Speed',
      step: '1',
      type: 'number',
      min: '0',
      max: '2',
      default: '1',
    },
    {
      property: 'HWL_direction',
      group: '',
      label: 'Shutdown Effect Direction',
      type: 'combobox',
      values: ['Start', 'End'],
      default: 'Start'
    },
    {
      property: 'HWL_random',
      group: '',
      label: 'Random Shutdown Effect Colors',
      type: 'boolean',
      default: 'true',
    },
    {
      property: 'HWL_color',
      group: '',
      label: 'Shutdown Color 1',
      min: '0',
      max: '360',
      type: 'color',
      default: '#FF0000',
    },
    {
      property: 'HWL_colorB',
      group: '',
      label: 'Shutdown Color 2',
      min: '0',
      max: '360',
      type: 'color',
      default: '#0000FF',
    },
    {
      property: 'HWL_brightness',
      group: '',
      label: 'Brightness',
      step: '10',
      type: 'number',
      min: '0',
      max: '100',
      default: '60',
      description: 'Adjust the global brightness, including the power-on lighting effect. (Frequent adjustments are not recommended.)',
    },
    {
      property: 'HWL_enable',
      group: '',
      label: 'Save',
      type: 'boolean',
      default: 'false',
      description: 'After adjusting the effect, click once to update the power-on lighting effect and save within 3 seconds. Once saved, disable Preview Startup.',
    },
  ]
}
// export function DeviceMessages() {
// 	return [
// 		{property: "Hardware Ligthing", message:"支持无软件的硬件灯效", tooltip: "单个接口最大输出1024LED！允许修改开机灯效,但请不要频繁更改!"},
// 	];
// }
const ProductNames = {
  0x3636: 'DRGB SIG V4F',
  0x3628: 'DRGB CORE V4F',
  0x3616: 'DRGB ULTRA V4F',
  0x3608: 'DRGB LED V4',
}
const ChannelALed = 256
const ChannelBLed = 144
const ChannelCLed = 60
const ChannelDLed = 60
const ChannelELed = 60
const DeviceMaxLedLimit = 8192
const ChannelArray = [
  ['Channel A1', ChannelALed],
  ['Channel A2', ChannelALed],
  ['Channel A3', ChannelALed],
  ['Channel A4', ChannelALed],
  ['Channel A5', ChannelALed],
  ['Channel A6', ChannelALed],
  ['Channel A7', ChannelALed],
  ['Channel A8', ChannelALed],

  ['Channel B1', ChannelBLed],
  ['Channel B2', ChannelBLed],
  ['Channel B3', ChannelBLed],
  ['Channel B4', ChannelBLed],
  ['Channel B5', ChannelBLed],
  ['Channel B6', ChannelBLed],
  ['Channel B7', ChannelBLed],
  ['Channel B8', ChannelBLed],

  ['Channel C1 LIANLI ATX', 240],
  ['Channel C2', ChannelCLed],
  ['Channel C3', ChannelCLed],
  ['Channel C4', ChannelCLed],
  ['Channel C5', ChannelCLed],
  ['Channel C6', ChannelCLed],

  ['Channel D1 LIANLI GPU*3', 324],
  ['Channel D2', ChannelDLed],
  ['Channel D3', ChannelDLed],
  ['Channel D4', ChannelDLed],
  ['Channel D5', ChannelDLed],
  ['Channel D6', ChannelDLed],

  ['Channel E1 LIANLI GPU*2', 216],
  ['Channel E2', ChannelELed],
  ['Channel E3', ChannelELed],
  ['Channel E4', ChannelELed],
  ['Channel E5', ChannelELed],
  ['Channel E6', ChannelELed],
  ['Channel E7', ChannelELed],
  ['Channel E8', ChannelELed],
]

function SetupChannels() {
  device.SetLedLimit(DeviceMaxLedLimit)
  if (MChannel == 29) {
    for (let i = 0; i < 16; i++) {
      device.addChannel(ChannelArray[i][0], ChannelArray[i][1])
    }
    device.addChannel(ChannelArray[16][0], ChannelArray[16][1])
    device.addChannel(ChannelArray[22][0], ChannelArray[22][1])
    device.addChannel(ChannelArray[28][0], ChannelArray[28][1])
  } else {
    for (let i = 0; i < MChannel; i++) {
      device.addChannel(ChannelArray[i][0], ChannelArray[i][1])
    }
  }
}

const vKeyNames = []
const vKeyPositions = []
const MaxLedsInPacket = 0x0154
const MaxPacket = 0x0100
const MaxOneLeds = 0x013c
const ALeds = [0, 20, 0, 20, 0, 20, 0, 20, 0, 20, 0, 20]
const AOLeds = [0, 21, 0, 21, 0, 21, 0, 21, 0, 21, 0, 21]
const GDLeds = [0, 27, 0, 27, 0, 27, 0, 27]
const GTLeds = [0, 27, 0, 27, 0, 27, 0, 27, 0, 27, 0, 27]
const FZLeds = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const ALed = 120
const AOLed = 126
const GDLed = 108
const GTLed = 162
const d36 = 13878
const d28 = 13864
const d8 = 13832
const MaxLeds = 1024
let MChannel = 16
let lastcTime = 0
let lastHWLchange = 0
let HWLupdateRequested = false
let lastsaveHWLchange = 0
let lastsaveRequested = false

export function LedNames() {
  return vKeyNames
}

export function LedPositions() {
  return vKeyPositions
}

export function Initialize() {
  device.setName(ProductNames[device.productId()])
  if (device.productId() == d36) MChannel = 36
  else if (device.productId() == d28) MChannel = 29
  else if (device.productId() == d8) MChannel = 8
  SetupChannels()
  requestFirmwareVersion()
}

export function Render() {
  if (!HWL_test) {
    SendChannel()
  }
  if (HWLupdateRequested == true) {
    const currentTime = Date.now()
    if (currentTime - lastHWLchange >= 1000) {
      lastHWLchange = Date.now()
      updateHWLsettings(1)
    }
  }
  if (lastsaveRequested == true) {
    const saveTime = Date.now()
    if (saveTime - lastsaveHWLchange >= 500) {
      lastsaveHWLchange = Date.now()
      updateHWLsettings(0)
    }
  }
}
function compareFirmwareVersion() {
  const firmwarePacket = device.read([0x00], 6)
  const FirmwareVersion =
    firmwarePacket[2] + '.' + firmwarePacket[3] + '.' + firmwarePacket[4] + '.' + firmwarePacket[5]
  device.log('DRGB Firmware version: ' + FirmwareVersion)
}

function requestFirmwareVersion() {
  const packet = [0x00, 0x02]
  device.write(packet, 65)
  compareFirmwareVersion()
}

function SendChannel() {
  let ArrayData = []
  let RGBData = []
  let LedCount = 0
  //	const cTime = Date.now();
  for (let Channel = 0; Channel < MChannel; Channel++) {
    let ChannelData = []
    const componentChannel = device.channel(ChannelArray[Channel][0])
    let ChannelLedCount = componentChannel.ledCount > MaxLeds ? MaxLeds : componentChannel.ledCount
    if (!ChannelLedCount) {
      if (seek) {
        ChannelLedCount = 120
      } else {
        ChannelLedCount = 5
      }
      const pulseColor = device.getChannelPulseColor(ChannelArray[Channel][0])
      ChannelData = device.createColorArray(pulseColor, ChannelLedCount, 'Inline')
    }
    // else if(LightingMode === "Forced") {
    // 	ChannelData = device.createColorArray(forcedColor, ChannelLedCount, "Inline");
    // }
    else {
      ChannelData = componentChannel.getColors('Inline')
    }
    LedCount += ChannelLedCount
    if (Channel == 16 || Channel == 22) {
      let lmap = sch_Ledmap(ChannelLedCount)
      ArrayData.push(...lmap)
      if (lmap.length == 2) {
        if (MChannel == 29) {
          ArrayData.push(...FZLeds)
          Channel += 5
        }
      } else Channel += 5
    } else if (Channel == 28 && ChannelLedCount == GDLed) {
      ArrayData.push(...GDLeds)
      Channel += 3
    } else {
      let QLedCount = (ChannelLedCount & 0xffff) >> 8
      let PLedCount = ChannelLedCount & 0xff
      ArrayData.push(QLedCount, PLedCount)
    }
    RGBData.push(...ChannelData)
  }
  if (MChannel < 36) ArrayData[71] = 0
  ArrayData.push(...RGBData)
  let RGBLedCount = ArrayData.length
  const NumPackets = Math.ceil(RGBLedCount / 1020) + 99
  let HigCount = LedCount / MaxPacket >= 1 ? 1 : 0
  let LowCount = LedCount >= MaxOneLeds ? 60 : LedCount % MaxPacket
  LedCount = LedCount <= MaxOneLeds ? 0 : LedCount - MaxOneLeds
  for (let CurrPacket = 100; CurrPacket <= NumPackets; CurrPacket++) {
    let packet = [0x00, CurrPacket, NumPackets, HigCount, LowCount]
    packet = packet.concat(ArrayData.splice(0, 1020))
    device.write(packet, 1025)
    if (LedCount) {
      HigCount = LedCount / MaxPacket >= 1 ? 1 : 0
      LowCount = LedCount >= MaxLedsInPacket ? 84 : LedCount % MaxPacket
      LedCount = LedCount <= MaxLedsInPacket ? 0 : LedCount - MaxLedsInPacket
    }
  }
}

function sch_Ledmap(led) {
  let ledmap = []
  if (led == GTLed) {
    return GTLeds
  } else if (led == ALed) {
    return ALeds
  } else if (led == AOLed) {
    return AOLeds
  } else {
    ledmap[0] = (led & 0xffff) >> 8
    ledmap[1] = led & 0xff
    return ledmap
  }
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  const colors = []
  colors[0] = parseInt(result[1], 16)
  colors[1] = parseInt(result[2], 16)
  colors[2] = parseInt(result[3], 16)

  return colors
}
export function onHWL_startChanged() {
  HWL_setting_updated()
}
export function onHWL_effectModeChanged() {
  HWL_setting_updated()
}
export function onHWL_effectSpeedChanged() {
  HWL_setting_updated()
}
export function onHWL_directionChanged() {
  HWL_setting_updated()
}
export function onHWL_randomChanged() {
  HWL_setting_updated()
}
export function onHWL_colorChanged() {
  HWL_setting_updated()
}
export function onHWL_colorBChanged() {
  HWL_setting_updated()
}
export function onHWL_brightnessChanged() {
  HWL_setting_brightness(0)
}
export function onHWL_modeChanged() {
  HWL_setting_mode()
}
export function onHWL_enableChanged() {
  lastHWLchange = Date.now()
  HWLupdateRequested = true
}
export function onHWL_restChanged() {
  const packet = [0x00, 0x45, 0x36, 0]
  device.write(packet, 65)
}
function HWL_setting_updated() {
  lastsaveHWLchange = Date.now()
  lastsaveRequested = true
}
function HWL_setting_brightness(save) {
  const packet = [0x00, 0x39, 0x00, HWL_brightness, save]
  device.write(packet, 65)
}
// function HWL_setting_mode() {
// 	let hwlmode;
// 	if(HWL_mode == "DRGB") { hwlmode = 0x01; } else if(HWL_mode == "AURA") { hwlmode = 0x02; } else if(HWL_mode == "ICUE8") { hwlmode = 0x08; } else if(HWL_mode == "ICUE16") { hwlmode = 0x10; } else if(HWL_mode == "ICUE24") { hwlmode = 0x18; } else if(HWL_mode == "ICUE30") { hwlmode = 0x1E; }else if(HWL_mode == "ICUEBUT") { hwlmode = 0xF0; }
// 	const packet = [0x00, 0x45, 0x35, hwlmode];
// 	device.write(packet, 65);
// }
function updateHWLsettings(save) {
  HWLupdateRequested = false
  lastsaveRequested = false
  let hwleffectMode
  let hwldirection
  if (HWL_effectMode == 'Rainbow Wave') {
    hwleffectMode = 0
  } else if (HWL_effectMode == 'Color Shift') {
    hwleffectMode = 1
  } else if (HWL_effectMode == 'Color Breathe') {
    hwleffectMode = 2
  } else if (HWL_effectMode == 'Color Wave') {
    hwleffectMode = 3
  } else if (HWL_effectMode == 'Solid Color') {
    hwleffectMode = 4
  } else if (HWL_effectMode == 'Meteor shower') {
    hwleffectMode = 5
  } else if (HWL_effectMode == 'Visor') {
    hwleffectMode = 6
  } else if (HWL_effectMode == 'Marquee') {
    hwleffectMode = 7
  } else if (HWL_effectMode == 'Color Strobing') {
    hwleffectMode = 8
  } else if (HWL_effectMode == 'Sequential') {
    hwleffectMode = 9
  } else if (HWL_effectMode == 'Browse') {
    hwleffectMode = 11
  }
  if (HWL_direction == 'Start') {
    hwldirection = 1
  } else if (HWL_direction == 'End') {
    hwldirection = 0
  }
  const random = HWL_random == true ? 0x01 : 0x00
  const start = HWL_start == true ? 0x0f : 0xf0
  const hwlcolor = hexToRgb(HWL_color)
  const hwlcolorB = hexToRgb(HWL_colorB)
  const packet = [
    0x00,
    0x35,
    0x00,
    0x00,
    0x00,
    hwleffectMode,
    HWL_effectSpeed,
    hwldirection,
    random,
    0x00,
    hwlcolor[0],
    hwlcolor[1],
    hwlcolor[2],
    hwlcolorB[0],
    hwlcolorB[1],
    hwlcolorB[2],
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    start,
    save,
  ]
  device.write(packet, 65)
}
export function Validate(endpoint) {
  return (endpoint.interface === 0) || (endpoint.interface === -1) // && endpoint.usage === 0x0002 && endpoint.usage_page === 0xFF00;
}

export function ImageUrl() {
  return 'https://gitee.com/drgb-controller/drgb/raw/master/Image/DRGBV4.png'
}
