import Component from 'react';
import { useForm } from 'react-hook-form'
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A comment was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleTest(){
    const input = wrapper.find('input');
    expect(input).toHaveLength(144);
    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
    expect(button.prop('type')).toEqual('submit');
    expect(button.text()).toEqual('Submit');
  }

  render() {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Comment:
          <input type="text" value={this.state.value} onChange={this.handleChange} ref={register({ required: true, maxLength: 144 })} />
        </label>
        <button type="submit" className="button">Submit</button>
      </form>
    );
  }
}