// node-check.js
const policyGroup = "谷歌服务";
let current = $persistentStore.read("currentNode");

if (!current) {
  current = "INIT";
  $persistentStore.write("INIT", "currentNode");
}

const newPolicy = $surge.selectGroupDetails(policyGroup).policy;

if (newPolicy !== current) {
  $persistentStore.write(newPolicy, "currentNode");
  $notification.post("节点切换", `新节点：${newPolicy}`);
}

$done()
