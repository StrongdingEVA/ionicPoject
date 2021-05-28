# 上传本地图片
# ionic cordova plugin add cordova-plugin-telerik-imagepicker@2.3.3
# cordova插件的imagepicker默认会安装最新版本 模拟器不支持最新版  这里安装指定版本
# npm install @ionic-native/image-picker

# 拍照上传
# 引入js和本地依赖，这样我们就可以使用camera的一些api
# npm install --save @ionic-native/camera 
# 添加cordova插件
# ionic cordova plugin add cordova-plugin-camera
# <plugin name="cordova-plugin-camera" spec="^4.0.3" />
# 相对android，ios对于权限的控制要更严格一些，ios10以下需要你在config.xml底部添加如下代码：
# <edit-config file="*-Info.plist" mode="merge" target="NSCameraUsageDescription">
#    <string>Used to take pictures</string>
# </edit-config>

# 上传相关
# ionic cordova plugin add cordova-plugin-file-transfer
# npm install @ionic-native/file-transfer