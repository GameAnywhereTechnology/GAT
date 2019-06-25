mkdir ~/local &
mkdir ~/local/nodeArm6Install &
cd ~/local/nodeArm6Install &

# wpa_cli -i wlan0 reconfigure if your wifi does not show inet for wlan0
wget https://nodejs.org/dist/v10.15.3/node-v10.15.3-linux-armv6l.tar.xz &

tar -xfnode-v10.15.3-linux-armv6l.tar.xz &

cd node-v10.15.3-linux-armv6l/ &
sudo cp -R * /usr/local/ &

node -v &
npm -v &

mkdir ~/local/gat
cd ~/local/gat

npm install --save GameAnywhereTechnology/gat#master
