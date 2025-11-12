import getUserRecord from "@/app/actions/getUserRecord";

const AverageSleep = async () => {
  const { record, daysWithRecords, error } = await getUserRecord();

  // 如果有错误，直接显示错误状态
  if (error) {
    return (
      <div className="bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
          <h4 className="text-lg font-medium text-gray-600 mb-2">Error</h4>
          <p className="text-red-600">Unable to calculate average sleep.</p>
        </div>
      </div>
    );
  }

  // 确保有效数字
  const validRecord = record || 0;
  const validDays =
    daysWithRecords && daysWithRecords > 0 ? daysWithRecords : 1;

  // 计算平均睡眠
  const averageSleep = validRecord / validDays;

  // 提取小时和分钟
  const hours = Math.floor(averageSleep);
  const minutes = Math.round((averageSleep - hours) * 60);

  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full text-center">
        <h4 className="text-lg font-medium text-gray-600 mb-2">
          Your Average Sleep Last 7 Days
        </h4>
        <h1 className="sm:text-3xl text-2xl font-bold bg-gradient-to-r from-slate-400 via-blue-300 to-slate-400 bg-clip-text text-transparent">
          {hours} hours {minutes} minutes
        </h1>
      </div>
    </div>
  );
};

export default AverageSleep;
