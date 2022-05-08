let final = '';
        let premer = '';
        let logiqu = false;
        let final_1 = '';
        let inst_calce = '';
        let calce = [];
        let zero = false;
        //function for add
        let fun_add = () => {
            final += premer;
            document.getElementById('span').innerHTML = final;
            premer = ''
        };
        let Ac = () => {
            final = '';
            document.getElementById('span').innerHTML = final;
        };
        let calcul = () => {
            while (true) {
                if (/\d+x\d+/.test(final) === true) {
                    inst_calce = final.match(/\d+x\d+/);
                    calce = inst_calce[0].match(/\d+/g);
                    final = final.replace(/\d+x\d+/, (Number(calce[0]) * Number(calce[1])));
                } else {
                    break
                }
            }
            while (true) {
                if (/\d+÷\d+/.test(final) === true) {
                    inst_calce = final.match(/\d+÷\d+/);
                    calce = inst_calce[0].match(/\d+/g);
                    if (Number(calce[1]) === 0) {
                        zero = true;
                        document.getElementById('span').innerHTML = 'Can\'t divide by zero.';
                        final = ''
                        break
                    }
                    final = final.replace(/\d+÷\d+/, (Number(calce[0]) / Number(calce[1])));
                } else {
                    break
                }
            }
            while (true) {
                if (zero === true) {
                    break
                }
                if (/\d+\+\d+/.test(final) === true) {
                    inst_calce = final.match(/\d+\+\d+/);
                    calce = inst_calce[0].match(/\d+/g);
                    final = final.replace(/\d+\+\d+/, (Number(calce[0]) + Number(calce[1])));
                } else {
                    break
                }
            }
            while (true) {
                if (zero === true) {
                    break
                }
                if (/\d+-\d+/.test(final) === true) {
                    inst_calce = final.match(/\d+-\d+/);
                    calce = inst_calce[0].match(/\d+/g);
                    final = final.replace(/\d+-\d+/, (Number(calce[0]) - Number(calce[1])));
                } else {
                    break
                }
            }
            if (zero === false) {
                document.getElementById('span').innerHTML = final;
            }
            zero = false;
        };
        //function -1
        document.getElementsByTagName('nav')[0].addEventListener('click', () => {
            if (final[final.length - 1] === '+' || final[final.length - 1] === '-' || final[final.length -
                1] === 'x' || final[final.length - 1] === '÷') {
                if (logiqu === true) {
                    logiqu = false
                }
            }
            for (let i = 0; i < (final.length - 1); i++) {
                final_1 += final[i]
            }
            final = final_1
            document.getElementById('span').innerHTML = final;
            final_1 = ''
        })
        //function for button
        document.querySelector('.bnt1').addEventListener('click', () => {
            premer = '7';
            if (logiqu === true) {
                logiqu = false
            };
            fun_add()
        });
        document.querySelector('.bnt2').addEventListener('click', () => {
            premer = '8';
            if (logiqu === true) {
                logiqu = false
            };
            fun_add()
        });
        document.querySelector('.bnt3').addEventListener('click', () => {
            premer = '9';
            if (logiqu === true) {
                logiqu = false
            };
            fun_add()
        });
        document.querySelector('.bnt4').addEventListener('click', () => {
            Ac()
        });
        document.querySelector('.bnt5').addEventListener('click', () => {
            premer = '4';
            if (logiqu === true) {
                logiqu = false
            };
            fun_add()
        });
        document.querySelector('.bnt6').addEventListener('click', () => {
            premer = '5';
            if (logiqu === true) {
                logiqu = false
            };
            fun_add()
        });
        document.querySelector('.bnt7').addEventListener('click', () => {
            premer = '6';
            if (logiqu === true) {
                logiqu = false
            };
            fun_add()
        });
        document.querySelector('.bnt8').addEventListener('click', () => {
            if (final[final.length - 1] !== '+' || final[final.length - 1] !== '-' || final[final.length -
                1] !== 'x' || final[final.length - 1] !== '÷') {
                calcul()
            }
        });
        document.querySelector('.bnt9').addEventListener('click', () => {
            premer = '1';
            if (logiqu === true) {
                logiqu = false
            };
            fun_add()
        });
        document.querySelector('.bnt10').addEventListener('click', () => {
            premer = '2';
            if (logiqu === true) {
                logiqu = false
            };
            fun_add()
        });
        document.querySelector('.bnt11').addEventListener('click', () => {
            premer = '3';
            if (logiqu === true) {
                logiqu = false
            };
            fun_add()
        });
        document.querySelector('.bnt12').addEventListener('click', () => {
            premer = 'x';
            if (logiqu === false && final !== '') {
                fun_add();
                logiqu = true
            }
        });
        document.querySelector('.bnt13').addEventListener('click', () => {
            premer = '0';
            if (logiqu === true) {
                logiqu = false
            };
            fun_add()
        });
        document.querySelector('.bnt14').addEventListener('click', () => {
            premer = '-';
            if (logiqu === false && final !== '') {
                fun_add();
                logiqu = true
            }
        });
        document.querySelector('.bnt15').addEventListener('click', () => {
            premer = '+';
            if (logiqu === false && final !== '') {
                fun_add();
                logiqu = true
            }
        });
        document.querySelector('.bnt16').addEventListener('click', () => {
            premer = '÷';
            if (logiqu === false && final !== '') {
                fun_add();
                logiqu = true
            }
        });