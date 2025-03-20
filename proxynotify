// node-change.js
const policyGroupName = "PROXY"; // 修改为你的策略组名称

$event.subscribe('policyChanged', (group, newPolicy) => {
  if (group === policyGroupName) {
    $notification.post(
      "节点已切换", 
      `当前节点：${newPolicy}`,
      `策略组「${group}」已切换到 ${newPolicy}`
    );
  }
});$done()
