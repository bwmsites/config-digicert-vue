var app = new Vue({
    el: '#app',
    data: {
		certfile: '',
		certname: '',
		empresa: '621241668',
		tipo_ambiente: '2',
		certificado_senha: '',
		danfe_tipo_impressao: '1',
		tipo_certificado: '1',
		logo: null
    },
	
	mounted () {
		//
	},
	
    methods: {
		handleCertUpload(){
			this.certfile = this.$refs.certfile.files[0];
		},
		submitFile(){
			event.preventDefault()
			let formData = new FormData()
			formData.append('certfile', this.certfile)
			formData.append('empresa', this.empresa)
			formData.append('tipo_ambiente', this.tipo_ambiente)
			formData.append('certificado_senha', this.certificado_senha)
			formData.append('danfe_tipo_impressao', this.danfe_tipo_impressao)
			formData.append('tipo_certificado', this.tipo_certificado)
			formData.append('logo', this.logo)
			
			axios.post('http://dfe.bwmsites.com/api/nfe/config',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(response => {
				console.log(response.data)
			})
			.catch(error => {
				console.log(error)
			})
		},
		getConfig() {
			axios.get('http://dfe.bwmsites.com/api/nfe/config')
			.then(response => {
				//this.certifle = response.data.certificado
				console.log('teste')
			})
		}
    }
})
