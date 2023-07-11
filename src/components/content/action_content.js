jQuery.ajax({
    type: 'GET',
    url: '',
    dataType: 'json',
    success: function (result) {
        if (result.status == 'ok') {
            let values = []
            result.data.records.forEach((job_title) => {
                values.push({
                    'label': `${job_title.name}`,
                    'value': job_title.id
                })
            })
            _this.helper('job_title').dispatchSetChoices(values)
        }
        else {
            if (result.data.message != undefined) {
                _this.dispatchFormAddMessage("error", result.data.message)
            }
            else {
                _this.dispatchFormAddMessage("error", "Can't create record")
            }
        }
    },
    error: function (data) {
        _this.dispatchFormAddMessage("error", "Can't communicate to API")
        _this.dispatchFormSubmitFail(values)
    }
})
